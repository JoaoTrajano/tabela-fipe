import React, {useState, useEffect, useContext} from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import { Grid, Typography, Stack } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Select from '@/components/Select'
import ButtonComponent from '@/components/Button'
import { toast } from 'react-toastify'

import { getAllBrands } from '@/services/brands'
import { getAllModelsByCode } from '@/services/modelsCar'
import { DatasContext } from '@/contexts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [brands, setBrands] = useState<any[]>([{}]);
  const [codeBrand, setCodeBrand] = useState<number>(0);

  const [models, setModels] = useState<any[]>([{}]);
  const [codeModel, setCodeModel] = useState<number>(0);

  const [year, setYear] = useState<any[]>([{}]);
  const [codeYear, setCodeYear] = useState<string>("");

  const [enabled] = useState<boolean>(true)

  const { setData } = useContext(DatasContext);
  const router = useRouter();

  const fetchAllBrands = async () => {
    const data = await getAllBrands()
    setBrands(data);
  }

  const fetchAllModelsByCode = async (code: number) => {
    const data = await getAllModelsByCode(code)
    setModels(data.modelos);
    setYear(data.anos);
  }

  useEffect(() => {
    void fetchAllBrands()
  }, [])

  useEffect(() => {
    if(codeBrand > 0) {
      void fetchAllModelsByCode(codeBrand)
    }
  }, [codeBrand])

  return (
    <>
      <Head>
        <title>Tabela Fipe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Grid xs={12} textAlign={"center"}>
          <Typography variant="h5" component="h2" >
            <strong>Tabela Fipe</strong>
          </Typography>
          <Typography variant='subtitle1' paragraph={true}>
          <strong>Consulte o valor de um veículo de forma gratuita</strong>
          </Typography>
          <Card sx={{
            width: '100%',
            padding: '16px',
          }}>
            <CardContent sx={{
              display: 'flex',
              flexDirection: 'column', 
              padding:'16px', 
              rowGap: '16px', 
            }}>
              <Stack>
               <Select 
                label='Marca' 
                list={brands}
                handleChange={setCodeBrand} 
              />
              </Stack>
              <Stack>
                <Select 
                  label='Modelo' 
                  list={models} 
                  handleChange={setCodeModel} 
                />
              </Stack>
              <Stack>
                <Select 
                  label='Ano' 
                  list={year} 
                  handleChange={setCodeYear} 
                />
              </Stack>
              <ButtonComponent
                disable={codeBrand > 0 ? !enabled : enabled}
                handleClick={() => {
                  if(!codeBrand || !codeModel || !codeYear) {
                    toast.error("Preencha todos os campos")
                    return
                  }
                  setData({
                    codeBrand,
                    codeModel,
                    codeYear
                  })
                  router.push('price-car-table-fipe')
                }}
              >
                Consultar Preço
              </ButtonComponent>
            </CardContent>
          </Card>
        </Grid>
       
      </main>
    </>
  )
}
