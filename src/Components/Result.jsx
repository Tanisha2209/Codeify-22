import { Box, styled} from '@mui/material'
import { useContext, useState, useEffect } from 'react';
import { Datacontext } from '../context/DataProvider';

const Result = () =>{

    const [src, setSrc] = useState('');

    const {Html,Css,Js} = useContext(Datacontext);

    const Container = styled(Box)`
        height: 41vh;
    `

    const srcCode = `
        <html>
            <body>${Html}</body>
            <style>${Css}</style>
            <script>${Js}</script>
        </html>
    `
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrc(srcCode)
        },1000)

        return()=> clearTimeout(timeout);
    }, [Html, Css, Js])

    return(
        <Container>
            <iframe
                srcDoc={src}
                title='Output'
                sandbox='allow-scripts'
                frameBorder={0}
                width="100%"
                height="100%"
            />
        </Container>
    )
}

export default Result;