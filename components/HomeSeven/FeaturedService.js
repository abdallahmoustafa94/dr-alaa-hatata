import React from "react";
import Link from "next/link";

const FeaturedService = () => {
  return (
    <>
      <div className="second-facility-area seven pt-100 pb-70">
        <div className="container">
          <h2 className="text-center mb-5">خدماتنا</h2>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 p-0">
              <div className="second-facility-item">
                <img src="/img/implant.webp" alt="Image" />
                <h3>زراعة الاسنان</h3>
                <p>
                زراعة الأسنان تعدّ الخيار الرائد في استبدال الأسنان المفقودة، حيث توفر للمرضى فرصة استعادة ابتسامتهم الجميلة ووظائفهم الفموية الطبيعية.
                </p>

                <Link href="/services-1" className="read-more">
                 المزيد <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 p-0">
              <div className="second-facility-item">
                <img src="/img/root-canal.webp" alt="Image" />
                <h3>حشو الاسنان</h3>
                <p>
               اجراء طبي سريع وفعال لاصلاح التسوس والمحافظة علي اسنانك
                </p>

                <Link href="/services-1" className="read-more">
                 المزيد <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 p-0">
              <div className="second-facility-item">
                <img src="/img/tooth-extraction.webp" alt="Image" />
                <h3>خلع الاسنان</h3>
                <p>
               حل أمن للتعامل مع مشكلات الاسنان المتقدمة والحفاظ علي راحة صحتك الفموية
                </p>

                <Link href="/services-1" className="read-more">
                 المزيد <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 p-0">
              <div className="second-facility-item">
                <img src="/img/dental-veneer.webp" alt="Image" />
                <h3>التركيبات الثابتة</h3>
                <p>
               الحل الدائم والموثوق لاستعادة اسنانك ووظائف فموية متجددة
                </p>

                <Link href="/services-1" className="read-more">
                 المزيد <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 p-0">
              <div className="second-facility-item">
                <img src="/img//braces.webp" alt="Image" />
                <h3>التقويم</h3>
                <p>
                رحلة تحقيق الابتسامة المثالية والفم الصحي بفضل التوجيه الدقيق والعناية الفريدة
                </p>

                <Link href="/services-1" className="read-more">
                  المزيد <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 p-0">
              <div className="second-facility-item">
                <img src="/img/children.webp" alt="Image" />
                <h3>عيادة الأطفال</h3>
                <p>
                مكان مميز حيث نساعد أطفالك على العناية بأسنانهم بشكل ممتع ومشوق، مما يسهم في بناء أسس صحة فمية جيدة للمستقبل
                </p>

                <Link href="/services-1" className="read-more">
                  المزيد <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedService;
