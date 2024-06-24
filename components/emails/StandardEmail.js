import {
    render,
    Mjml,
    MjmlHead,
    MjmlText,
    MjmlBody,
    MjmlSection,
    MjmlColumn,
    MjmlButton,
    MjmlAttributes,
    MjmlSocial,
    MjmlSocialElement,
    MjmlDivider,
    MjmlImage,
    MjmlTitle,
  } from "mjml-react";



function StandardEmail({ message, heading, type, id }){
    return( 
        <Mjml>
            <MjmlHead>
                <MjmlTitle>TEDxGeorge</MjmlTitle>
                <MjmlAttributes>
                    <MjmlText color="#555" lineHeight="1.5" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif" />
                </MjmlAttributes>
            </MjmlHead>
        
            
            <MjmlBody>
                <MjmlSection>
                    <MjmlColumn width="100%">
                        <MjmlImage align="left" width="300px" src="https://tedxgeorge.com/assets/TEDx_Logo_Short_George-black.png" href="https://tedxgeorge.com" />
                    </MjmlColumn>
                </MjmlSection>
        

                <MjmlSection>
                    <MjmlColumn>
                        <MjmlText fontSize="21px" lineHeight="1" paddingBottom="0">
                            <h1 style={{ margin: 0 }}>
                                {heading}
                            </h1>
                        </MjmlText>
                    
                        <MjmlText font-size="18px" paddingTop="0">
                            <div dangerouslySetInnerHTML={{ __html: message }} />
                        </MjmlText>

                        <MjmlButton
                            padding="20px"
                            backgroundColor="#dc3545"
                            fontSize="21px"
                            borderRadius="6px"
                            color="#fff"
                            align="left"
                            href={`https://tedxgeorge.com/qr?id=${id}`}
                        >
                            Download Your Ticket
                        </MjmlButton>

                    </MjmlColumn>
                </MjmlSection>
        


                <MjmlSection>
                    <MjmlColumn>
                        <MjmlDivider borderWidth="1px" width="100%" borderStyle="solid" borderColor="lightgrey" />
                    </MjmlColumn>
                </MjmlSection>


                <MjmlSection paddingBottom="0">
                    <MjmlColumn>
                        <MjmlImage align="left" width="200px" src="https://tedxgeorge.com/assets/TEDx_Logo_Short_George-black.png" href="https://tedxgeorge.com"/>
                    </MjmlColumn>
                    
                    <MjmlColumn>
                        <MjmlSocial icon-size="32px" mode="horizontal" align="right">
                            <MjmlSocialElement borderRadius="99px" name="facebook" href="https://www.facebook.com/profile.php?id=61556394653005" paddingRight="40px"/>
                            <MjmlSocialElement borderRadius="99px" name="youtube" href="https://www.youtube.com/@TEDx" paddingRight="40px"/>
                            <MjmlSocialElement borderRadius="99px" name="instagram" href="https://www.instagram.com/tedxgeorge/" />
                        </MjmlSocial>
                    </MjmlColumn>        
                </MjmlSection>



                <MjmlSection paddingTop="0">
                    <MjmlColumn>
                        <MjmlText color="#aaa" paddingTop="20px" fontSize="11px">
                            <a href="https://tedxgeorge.com/about" style={{ color: "#aaa"}}>About</a> 
                            &nbsp; | &nbsp; 
                            <a href="https://tedxgeorge.com/events" style={{ color: "#aaa"}}>Events</a>
                            &nbsp; | &nbsp;  
                            <a href="https://tedxgeorge.com/partners" style={{ color: "#aaa"}}>Partners</a> 
                            &nbsp; | &nbsp;  
                            <a href="https://tedxgeorge.com/speakers" style={{ color: "#aaa" }}>Speakers</a>
                        </MjmlText>
                        
                        <MjmlText lineHeight="1.65" color="#aaa" fontSize="11px">
                            <p>©2024 TEDxGeorge, NPC<br/>
                            York St. Blvd. Shopping Center, Suite #2, George, South Africa 6529<br/>
                            <br/>
                            All rights reserved.</p>
                        </MjmlText>
                    </MjmlColumn>
                </MjmlSection>
        
            </MjmlBody>
        </Mjml>
    )
}


export default StandardEmail;