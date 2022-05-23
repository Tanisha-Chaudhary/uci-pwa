import { useEffect } from "react";

export const FileUploader = (props: any) => {
    useEffect(()=>{
        let uploadMedia = async () => {
            const data = new FormData();
            data.append('file',props.file);
            try{
                let res = await fetch(
                'http://uci-inbound-server-svn29.ngrok.samagra.io/cdn/minioSignedUrl',
                {
                    method: 'post',
                    body: data,
                }
                );
                let responseJson = await res.json();
                if (res.status === 200) {
                    props.sendMedia(null, responseJson)
                }else{      
                    console.log('image not uploaded')
                }
            }
            catch{
                console.error('no response received');
            }    
        };
        uploadMedia();
    },[props])
    return (
        <>  
        </>
    )
}