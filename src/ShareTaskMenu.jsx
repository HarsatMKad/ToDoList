import shareCopy from "./assets/share_button_copy.svg"
import shareVK from "./assets/share_button_vk.svg"
import shareTG from "./assets/share_button_telegram.svg"
import shareWhatsapp from "./assets/share_button_whatsapp.svg"
import shareFacebook from "./assets/share_button_facebook.svg"


function ShareTaskMenu({showAlert}) {
    function closeAlert(){
        showAlert();
    }

    return (
        <div class="blur_background" onClick={closeAlert}>
            <div class="share_box">
                <button class="share_box_button">
                    <img src={shareCopy} alt="" />
                </button>

                <button class="share_box_button">
                    <img src={shareVK} alt="" />
                </button>

                <button class="share_box_button">
                    <img src={shareTG} alt="" />
                </button>

                <button class="share_box_button">
                    <img src={shareWhatsapp} alt="" />
                </button>

                <button class="share_box_button">
                    <img src={shareFacebook} alt="" />
                </button>
            </div>
        </div>
    )
}

export default ShareTaskMenu