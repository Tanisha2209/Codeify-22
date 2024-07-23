import Editor from './Editor';
import { useContext } from 'react';

import { Box, styled} from '@mui/material';

import { Datacontext } from '../context/DataProvider';
const Container= styled(Box)`
    display: flex;
    background: #060606;
    
`

const Code = () =>{
    const {Html, setHtml, Css, setCss, Js, setJs} = useContext(Datacontext);
    return(
        <Container>
            <Editor
            heading="HTML"
            icon="/"
            color="#FF3C41"
            value={Html}
            onChange= {setHtml} />
            <Editor
            heading="CSS"
            icon="*"
            color="#0EBEFF"
            value={Css}
            onChange= {setCss} />
            <Editor
            heading="JS"
            icon="( )"
            color="#FCD000"
            value={Js}
            onChange= {setJs} />
        </Container>
    );
}

export default Code;