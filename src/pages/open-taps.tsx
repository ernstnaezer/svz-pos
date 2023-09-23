import { Button, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Head from "next/head";
import useSWR from "swr";
import { OpenTap } from "../types";

const fetcher = (url:string) => fetch(url).then(r => r.json())

export default function Home () {

   const { data, isLoading } = useSWR<OpenTap[]>('/api/open-taps', fetcher)

    return (
        <>
          <Head>
            <title>Open bonnentjes</title>
          </Head>
          
          <Card sx={{height:'100%' }} variant="outlined">
            <CardContent>             
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Naam</TableCell>
                        <TableCell align="right">Totaal</TableCell>
                        <TableCell align="right">Betalen</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>

                    {!isLoading && data && data.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Ernst
                        </TableCell>
                        <TableCell align="right">100</TableCell>
                        <TableCell align="right"><Button variant="contained">Afrekenen</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </CardContent>
          </Card>

        </>
      );
  }
  