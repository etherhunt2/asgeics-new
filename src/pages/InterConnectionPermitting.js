import BaseComponent from "../components/BaseComponent.js";
import "../styles/components/interconnection-permitting.css";
import Video from "../components/Video.js";

export default class InterConnectionPermitting extends BaseComponent {
  constructor() {
    super("main", "interconnection-page");
  }

  async render() {
    const video = new Video();
    this.element.innerHTML = `
            <!-- ========== HERO SECTION ========== -->
            <section class="ic-hero">
                <div class="ic-hero__container">
                    <h1 class="ic-hero__title">AHJ Permitting </br>and Interconnection</h1>
                </div>
            </section>

            <!-- ========== GENERAL INFO SECTION ========== -->
            <section class="ic-general">
                <div class="ic-general__container">
                    <h2 class="ic-general__title">General Information</h2>
                    <p class="ic-general__text">We handle the full interconnection and permitting process for both residential and commercial solar systems. You receive a permit- and utility-approved project ready for installation.</p>
                </div>
            </section>

            <!-- ========== END-TO-END SECTION ========== -->
            <section class="ic-e2e">
                <div class="ic-e2e__container">
                    <div class="ic-e2e__content">
                        <h2 class="ic-e2e__title">End-to-End Interconnection & Permitting Support</h2>
                        <p class="ic-e2e__subtitle">We’ve seen it all. ASGEICS India specializes in difficult utilities and AHJs.</p>
                        <ul class="ic-list">
                            <li>Robust portal to track all your projects</li>
                            <li>Interconnection application submission</li>
                            <li>Utility rebate applications</li>
                            <li>Direct AHJ and fire department coordination</li>
                        </ul>
                    </div>
                    <div class="ic-e2e__image">
                        <img src="/images/handshake.webp" />
                    </div>
                </div>
            </section>

            <!--Image Gallery -->
            <section class="ic-gallery">
                <div class="ic-gallery__container">
                    <div class="ic-gallery__title">
                        <h2> All 50 States & Canada</h2>
                        <p>End-to-End Solar Interconnection & Permitting Services</p>
                    </div>
                    <div class="ic-gallery__w100">
                        <div class="ic-gallery__item">
                            <img src="/images/interconnection1.png" />
                        </div>
                        <div class="ic-gallery__item">
                            <img src="/images/previous-work.png" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- WhatsApp -->
            <div class="whatsapp-container">
                <a href="https://wa.link/6caatk" class="whatsapp-button">
                    <img src="./icons/whatsapp.png" alt="WhatsApp" class="whatsapp-icon">
                    <span class="whatsapp-text">Chat on WhatsApp</span>
                </a>
            </div>
        `;
    this.element.appendChild(await video.render());
    return this.element;
  }
}
