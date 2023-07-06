import React from 'react'
import './FooterSimple.css'

function FooterSimple() {
    return (
        <>
            <footer class="text-center text-black FooterS" style={{ backgroundColor: 'transparent' }}>
                <div class="container p-4 pb-0">
                    <section class="mb-4">

                        <a class="btn btn-floating m-1 FooterS" role="button" href='https://www.facebook.com/weg.brasil'
                        ><i class="instagram icon FooterS"></i></a>

                        <a class="btn btn-floating m-1 FooterS"  role="button" href='https://www.linkedin.com/company/weg'
                        ><i class="linkedin icon FooterS"></i></a>

                        <a class="btn btn-floating m-1 FooterS"  role="button" href='https://www.youtube.com/user/wegvideos'
                        ><i className="youtube icon FooterS"></i></a>

                        <a class="btn btn-floating m-1 FooterSdc" role="button" href="https://mail.google.com/mail/u/0/#search/info-br%40weg.net?compose=CllgCJlKnNzSNTsBmkTvPwDKhClXHSMtXRxWkLKjVhmJQcVKPXTbCLrGnmZkSnPlTrHgGpPrJdV"
                        ><i class="envelope icon" ></i></a>

                        <a class="btn btn-floating m-1 FooterS" role="button" href="https://open.spotify.com/show/5nYCIEXgwbygMN25PcXP16?si=47d900b78fc84d6b&nd=1"
                        ><i class="spotify icon" ></i></a>
                    </section>
                </div>

                <div className="text-center p-3 FooterS">
                    © 2023 Copyright:
                    <p className="text-black FooterS">Rogue</p>
                </div>
            </footer></>
    )
}

export default FooterSimple