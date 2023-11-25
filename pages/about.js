import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";

const About = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="من نحن"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="من نحن"
        imgClass="bg-1"
      />

      <div className="about-area about-page pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
            <div className="col-lg-12">
              <div className="single-doctors-two">
                <div className="doctor-img">
                  <img src="/img/about.jpg" alt="Image" />
                </div>
              </div>
          </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="text-center">من نحن؟</h2>
                <p>
                نحن في عيادة الدكتورة الاء حتاتة نلتزم بتقديم أعلى مستوى من الرعاية الصحية والخدمات الطبية في مجال طب الأسنان. نعتبر رضا المرضى وصحتهم أمرًا من أعلى الأولويات. تجمع عيادتنا بين الخبرة والتكنولوجيا الحديثة لضمان تقديم أفضل الحلول والعناية لأسنان المرضى.
                </p>

                <p>
                دكتورة الاء حتاتة هي خبيرة في مجال طب الأسنان وتمتلك خبرة واسعة في مختلف جوانب هذا المجال. نهتم بتقديم رعاية شخصية ومخصصة لكل مريض، مع التركيز على الوقاية والتشخيص المبكر وعلاج الأمراض السنية.


                </p>
                <p>
                تسعى عيادتنا دائمًا لتوفير بيئة مريحة ومريحة للمرضى، مع التركيز على توعية المرضى بأهمية العناية بصحتهم الفموية. نحن نعمل بجد لضمان أن كل مريض يتلقى العناية التي يستحقها ويغادر عيادتنا بابتسامة جميلة وصحة أفضل.


                </p>
                <p>
                إذا كنت بحاجة إلى العناية بصحتك الفموية أو ترغب في الحصول على الاستشارة من دكتورة ذات خبرة، فلا تتردد في زيارة عيادة الدكتورة الاء حتاتة. نحن هنا لتلبية احتياجاتك وضمان رضاك وراحتك في كل مرحلة من مراحل العناية بأسنانك.





                </p>

              
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
