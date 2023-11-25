import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import OurWorks from "../components/HomeOne/OurWorks";

const Services1 = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="خدماتنا"
        homePageUrl="/"
        homePageText="الرئيسية"
        activePageText="خدماتنا"
        imgClass="bg-1"
      />

<div className="scrives-item-2 mt-4 ">
      <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/taqweem-details.jpg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <h3 className="mt-4 text-center">ابتسامة مثالية مع تقويم الأسنان</h3>
                <p>
                هل ترغب في الحصول على ابتسامة مثالية؟ إذا كان الأمر كذلك، فقد يكون تقويم الأسنان هو الحل المناسب لك.

تقويم الأسنان هو عملية تصحيح محاذاة الأسنان والفكين. يمكن أن يساعد تقويم الأسنان على حل مجموعة متنوعة من مشاكل الأسنان، بما في ذلك:


                </p>
                <ul>
  <li>عدم محاذاة الأسنان</li>
  <li>العضة غير الصحيحة</li>
  <li>الفكين غير المتساويين</li>
</ul>
<p>يمكن أن يساعد تقويم الأسنان في تحسين مظهر أسنانك وصحتها، ويمكن أن يساعد أيضًا في تقليل خطر الإصابة بمشاكل الأسنان الأخرى، مثل تسوس الأسنان وأمراض اللثة.

في عيادتنا، نستخدم أحدث التقنيات لتقويم الأسنان. نحن ملتزمون بتزويدك بأفضل تجربة علاجية ممكنة.</p>
              </div>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/veneers-details.jpg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8" >
                <h3 className="mt-4 text-center">ابتسامة جميلة وطبيعية مع الفينير</h3>
                <p>
                هل ترغب في تحسين مظهر أسنانك دون الحاجة إلى تقويم الأسنان أو زراعة الأسنان؟ إذا كان الأمر كذلك، فقد يكون الفينير هو الحل المناسب لك.

الفينير هو قشرة رقيقة يتم وضعها على سطح الأسنان الأمامية. يمكن استخدامها لتصحيح مجموعة متنوعة من مشاكل الأسنان، بما في ذلك:




                </p>
                <ul>
  <li>تسوس الأسنان</li>
  <li>اصفرار الأسنان</li>
  <li>عدم انتظام الأسنان</li>
</ul>

              </div>
            </div>
            <div className="row align-items-center mt-4" >
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/implant-details.jpg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8 mt-5">
                <h3 className="text-center">ابتسامة جميلة وصحية مع زراعة الأسنان</h3>
                <p>
                هل فقدت أسنانك؟ هل تعاني من مشاكل في المضغ أو الكلام؟ إذا كان الأمر كذلك، فقد تكون زراعة الأسنان هي الحل المناسب لك.

زراعة الأسنان هي عملية جراحية تُستخدم لاستبدال الأسنان المفقودة. يتم إدخال الدعامات المعدنية في عظام الفك، ثم يتم تثبيت الأسنان الاصطناعية عليها.

يمكن أن تساعد زراعة الأسنان في تحسين مظهر أسنانك وصحتها، ويمكن أن تساعد أيضًا في تقليل خطر الإصابة بمشاكل الأسنان الأخرى، مثل تسوس الأسنان وأمراض اللثة.



                </p>
              </div>
              <div className="row align-items-center mt-4" >
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/composite-details.jpg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8 mt-5">
                <h3 className="text-center">احصل على أسنان صحية وقوية مع حشو الأسنان</h3>
                <p>
                هل تعاني من ألم في الأسنان؟ هل لاحظت وجود ثقب أو كسر في أحد أسنانك؟ إذا كان الأمر كذلك، فقد تكون بحاجة إلى حشو الأسنان.

حشو الأسنان هو إجراء طبي يُستخدم لإصلاح الأسنان التالفة. يمكن استخدامه لتصحيح مجموعة متنوعة من مشاكل الأسنان، بما في ذلك:

                </p>
                <ul>
                  <li>تسوس الأسنان</li>
                  <li>الشقوق</li>
                  <li>الكسور</li>
                </ul>

              </div>
            </div>
            <div className="row align-items-center mt-4" >
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/composite-details.jpg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8 mt-5">
                <h3 className="text-center">تخلص من ألم الأسنان مع خلع الأسنان</h3>
                <p>
                هل تعاني من ألم في الأسنان؟ هل لاحظت أن أحد أسنانك متحرك أو غير مستقر؟ إذا كان الأمر كذلك، فقد تكون بحاجة إلى خلع الأسنان.

خلع الأسنان هو إجراء طبي يُستخدم لإزالة الأسنان التالفة أو غير المفيدة. يمكن استخدامه لتصحيح مجموعة متنوعة من مشاكل الأسنان، بما في ذلك:

                </p>
                <ul>
                  <li>تسوس الأسنان الشديد</li>
                  <li>أمراض اللثة المتقدمة</li>
                  <li>الأسنان المكسورة أو المصابة</li>
                  <li>الأسنان المتضررة من الحوادث</li>
                </ul>

              </div>
            </div>
            </div>
            <div className="row align-items-center mt-4 mb-4">
              <div className="col-lg-4">
                <div className="services-img">
                  <img
                    src="/img/details-children.jpeg"
                    alt="Image"
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <h3 className="mt-4 text-center">ابتسامة صحية لأطفالك مع عيادة الأطفال</h3>
                <p>
                هل ترغب في ضمان صحة أسنان أطفالك؟ إذا كان الأمر كذلك، فأنت بحاجة إلى العثور على عيادة أسنان للأطفال متخصصة في رعاية أسنان الأطفال.

في عيادة الأطفال، سنقدم لأطفالك الرعاية التي يحتاجونها للحفاظ على ابتساماتهم صحية وجميلة. سنستخدم أحدث التقنيات  لضمان حصولهم على أفضل علاج ممكن.


                </p>
              </div>
            </div>
      </div>
          </div>

      <Footer />
    </>
  );
};

export default Services1;
