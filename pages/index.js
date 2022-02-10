import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Home.module.css";
import media from "../styles/media.module.css";

export default function Home() {
  return (
    <div className={"all"}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>タイトルタイトル</title>
        <meta name="description" content="説明文です" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        {/* header */}

        <header>
          <div className={`${style.hd_main} ${media.hd_main_sp}`}>
            <h1 className={`${style.hd_img} ${media.hd_img_sp}`}>
              <Image
                src="/hd-logo.png"
                alt="KOKI IKEDA PHOTOGRAPY"
                width={313}
                height={14}
              />
            </h1>
            <nav className={`${style.hd_nav} ${media.hd_nav_sp}`}>
              <ul className={style.hd_ul}>
                <li className={style.hd_li}>
                  <Link href={"/"} passHref>
                    <a>
                      <span>about</span>はじめに
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref>
                    <a>
                      <span>plan</span>撮影プラン
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref>
                    <a>
                      <span>work</span>おしごと
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref>
                    <a>
                      <span>gallery</span>ギャラリー
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"} passHref>
                    <a>
                      <span>news</span>お知らせ
                    </a>
                  </Link>
                </li>
                <li className={style.list_contact}>
                  <Link href={"/"} passHref>
                    <a>
                      <span>contact</span>お問合わせ
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* main */}

        <main>
          <div className={`${style.content} ${media.content_sp}`}>
            <div className={`${style.main_img} ${media.padding_sp}`}>
              <Image
                src="/hero1.jpg"
                alt="main-photo"
                width={1340}
                height={750}
              />

              <div
                className={`${style.main_img_title} ${media.main_img_title_sp}`}
              >
                <Image
                  src="/hero-copy.png"
                  alt="main-photo"
                  width={388}
                  height={125}
                />
              </div>
            </div>

            {/* sec-1 */}

            <section className={`${style.sec1} ${media.padding_margin_sp}`}>
              <div className={`${style.bgc1} ${media.bgc1_sp}`}>
                <div
                  className={`${style.sec1_img_txt} ${media.sec1_img_txt_sp}`}
                >
                  <div className={style.sec1_img_box}>
                    <div className={`${style.sec1_img} ${media.sec1_img_sp}`}>
                      <Image
                        src="/sec1-img1.jpg"
                        width={625}
                        height={520}
                        className={"img"}
                        alt="笑顔は幸せを呼び、そして未来への笑顔を繋ぐ"
                      />
                    </div>
                  </div>
                  <div className={`${style.sec1_txt} ${media.sec1_txt_sp}`}>
                    <h2
                      className={`${style.sec1_txt_title} ${media.sec1_txt_title_sp}`}
                    >
                      笑顔は幸せを呼び、
                      <br />
                      そして未来への笑顔を繋ぐ
                    </h2>

                    <p className={`${style.sec1_txt01} ${media.sec1_txt01_sp}`}>
                      沢山の幸せに寄り添った生き方をしたい。
                      <br />
                      そして僕が撮る写真でたくさんの人に幸せになってほしい。
                    </p>

                    <p className={style.sec1_txt02}>
                      それは撮影中も写真を見て感動した瞬間も
                      <br />
                      そして何年後かに見返えした時もずっと！
                    </p>

                    <p className={style.sec1_txt02}>
                      いつまでもあなたが主人公でいられるような温かい物語を残します。
                      <br />
                      大切な人と過ごす今というかけがえのないこの瞬間を僕と一緒に残しませんか？
                    </p>

                    <p className={style.sec1_txt02}>
                      写真相談室(zoom)やプリセット販売などもしております。
                      <br />
                      よければチェックしてくださいね！
                    </p>
                  </div>
                </div>

                {/* about & plan */}

                <div className={style.about_plan}>
                  <div className={`${style.about} ${media.about_sp}`}>
                    <div
                      className={`${style.about_img_box} ${media.about_img_box_sp}`}
                    >
                      <Image
                        src="/sec1-img2.jpg"
                        width={316}
                        height={460}
                        alt="はじめに"
                      />
                    </div>
                    <div
                      className={`${style.about_img_box2} ${media.about_img_box2_sp}`}
                    >
                      <Image
                        src="/sec1-img2-sp.jpg"
                        width={316}
                        height={316}
                        alt="はじめに"
                      />
                    </div>

                    <div
                      className={`${style.about_txt_box} ${media.about_txt_box_sp}`}
                    >
                      <Link href={"/"} passHref>
                        <a className={style.btn_basic}>
                          はじめに
                          <span className={style.ap_space}>about</span>
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className={`${style.plan} ${media.plan_sp}`}>
                    <div
                      className={`${style.plan_txt_box} ${media.plan_txt_box_sp}`}
                    >
                      <Link href={"/"} passHref>
                        <a className={style.btn_basic}>
                          撮影プラン
                          <span className={style.ap_space}>plan</span>
                        </a>
                      </Link>
                    </div>

                    <div
                      className={`${style.plan_img_box} ${media.plan_img_box_sp}`}
                    >
                      <Image
                        src="/sec1-img3.jpg"
                        width={316}
                        height={460}
                        className={style.plan_img}
                        alt="撮影プラン"
                      />
                    </div>
                    <div
                      className={`${style.plan_img_box2} ${media.plan_img_box2_sp}`}
                    >
                      <Image
                        src="/sec1-img3-sp.jpg"
                        width={316}
                        height={316}
                        alt="はじめに"
                      />
                    </div>
                  </div>
                </div>

                {/* その他 */}

                <div className={`${style.sec1_items} ${media.sec1_items_sp}`}>
                  <div className={style.sec1_col_12}>
                    <div
                      className={`${style.sec1_items_box} ${media.sec1_items_box_sp}`}
                    ></div>
                  </div>

                  <div className={style.item_size}>
                    <Link href={"/"} passHref>
                      <a className="btn-anchor hov">
                        <Image
                          src="/sec1-img4.jpg"
                          width={212}
                          height={160}
                          alt="公式LINE"
                        />
                        <p className={style.item_txt}>
                          公式LINE
                          <br />
                          <span>official LINE</span>
                        </p>
                      </a>
                    </Link>
                  </div>

                  <div className={style.item_size}>
                    <Link href={"/"} passHref>
                      <a className="btn-anchor hov">
                        <Image
                          src="/sec1-img5.jpg"
                          width={212}
                          height={160}
                          alt="公式LINE"
                        />
                        <p className={style.item_txt}>
                          写真教室
                          <br />
                          <span>photo lesson</span>
                        </p>
                      </a>
                    </Link>
                  </div>

                  <div className={`${style.item_size} ${media.item_size_sp}`}>
                    <Link href={"/"} passHref>
                      <a className="btn-anchor hov">
                        <Image
                          src="/sec1-img6.jpg"
                          width={212}
                          height={160}
                          className="img-rspsv"
                          alt="公式LINE"
                        />
                        <p className={style.item_txt}>
                          プリセット販売
                          <br />
                          <span>preset</span>
                        </p>
                      </a>
                    </Link>
                  </div>

                  <div className={`${style.item_size} ${media.item_size_sp}`}>
                    <Link href={"/"} passHref>
                      <a className="btn-anchor hov">
                        <Image
                          src="/sec1-img7.jpg"
                          width={212}
                          height={160}
                          className="img-rspsv"
                          alt="公式LINE"
                        />
                        <p className={style.item_txt}>
                          企業提携・コラボ
                          <br />
                          <span>collaboration</span>
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* sec-2 */}

            <div className={`${style.sec2} ${media.padding_margin_sp}`}>
              <div className={`${style.bgc2} ${media.bgc2_sp}`}>
                <section className={style.gallery_all}>
                  <div className={style.gal_top}>
                    <div className={style.gal_title}>
                      <p className={`${style.gal_top01} ${media.gal_top01_sp}`}>
                        gallery
                      </p>
                      <h3
                        className={`${style.gal_top02} ${media.gal_top02_sp}`}
                      >
                        撮影ギャラリー
                      </h3>
                    </div>
                    <div className={`${style.gal_top03} ${media.gal_top03_sp}`}>
                      <p>all view</p>
                    </div>
                  </div>

                  <div className={style.gallery_item}>
                    <Image
                      src="/DSC02484-592x492.jpg"
                      width={293.33}
                      height={243.77}
                      alt="works"
                    />
                    <p className={style.gal_category}>COUPLE</p>
                    <h3 className={style.gal_h3}>USJカップルフォト。in大阪</h3>
                    <p className={style.gal_date}>date：2022.01</p>
                  </div>

                  <div className={style.gallery_item}>
                    <Image
                      src="/DSC09683-1-592x492.jpg"
                      width={293.33}
                      height={243.77}
                      alt="works"
                    />
                    <p className={style.gal_category}>COUPLE</p>
                    <h3 className={style.gal_h3}>
                      カップルフォト部屋撮り。in京都
                    </h3>
                    <p className={style.gal_date}>date：2021.12</p>
                  </div>

                  <div className={style.gallery_item}>
                    <Image
                      src="/DSC08618-592x492.jpg"
                      width={293.33}
                      height={243.77}
                      alt="works"
                    />
                    <p className={style.gal_category}>WEDDING</p>
                    <h3 className={style.gal_h3}>式場撮影Wedding💍。in東京</h3>
                    <p className={style.gal_date}>date：2022.12</p>
                  </div>

                  <div className={style.gallery_item}>
                    <Image
                      src="/DSC08113-592x492.jpg"
                      width={293.33}
                      height={243.77}
                      alt="works"
                    />
                    <p className={style.gal_category}>COUPLE</p>
                    <h3 className={style.gal_h3}>
                      ペアルックカップルフォト。in大阪
                    </h3>
                    <p className={style.gal_date}>date：2021.12</p>
                  </div>

                  <div className={style.gallery_item}>
                    <Image
                      src="/DSC06366-592x492.jpg"
                      width={293.33}
                      height={243.77}
                      alt="works"
                    />
                    <p className={style.gal_category}>FAMILY</p>
                    <h3 className={style.gal_h3}>
                      七五三ファミリーフォト。in奈良
                    </h3>
                    <p className={style.gal_date}>date：2021.12</p>
                  </div>

                  <div className={style.gallery_item}>
                    <Image
                      src="/DSC03956-592x492.jpg"
                      width={293.33}
                      height={243.77}
                      alt="works"
                    />
                    <p className={style.gal_category}>WEDDING</p>
                    <h3 className={style.gal_h3}>和装Wedding💍。in大阪</h3>
                    <p className={style.gal_date}>date：2021.11</p>
                  </div>
                  <div className={`${style.gal_top04} ${media.gal_top04_sp}`}>
                    <p>all view</p>
                  </div>
                </section>

                {/* news */}

                <section className={style.news_all}>
                  <div className={style.news_top_box}>
                    <div
                      className={`${style.news_top_item} ${media.news_top_item_sp}`}
                    >
                      <div className={style.news_top_title}>
                        <p
                          className={`${style.news_top_item01} ${media.news_top_item01_sp}`}
                        >
                          {" "}
                          news / blog
                        </p>
                        <h3
                          className={`${style.news_top_item02} ${media.news_top_item02_sp}`}
                        >
                          お知らせ・ブログ
                        </h3>
                      </div>
                      <p
                        className={`${style.news_top_item03} ${media.news_top_item03_sp}`}
                      >
                        all view
                      </p>
                    </div>
                  </div>

                  <div className={style.news_content}>
                    <div className={style.content_item01}>
                      <div className={style.content_item02}>
                        <p>2021.12.30</p>
                        <h3 className={style.h3_space}>
                          サイトがオープンしました！
                        </h3>
                      </div>
                    </div>

                    <div className={style.content_item01}>
                      <div className={style.content_item02}>
                        <p>2021.12.30</p>
                        <h3 className={style.h3_space}>
                          Lightroomプリセットの販売を開始しました！
                        </h3>
                      </div>
                    </div>

                    <div className={style.content_item01}>
                      <div className={style.content_item02}>
                        <p>2021.11.16</p>
                        <h3 className={style.h3_space}>
                          フリーランスになりました！
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${style.news_top_item04} ${media.news_top_item04_sp}`}
                  >
                    <p>all view</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        {/* footer */}

        <footer className={`${style.ft} ${media.padding_margin_sp}`}>
          <div className={style.ct_img}>
            <div className={style.ct_box}>
              <div className={`${style.ct_txt} ${media.ct_txt_sp}`}>
                <h3 className={`${style.ct_title} ${media.ct_title_sp}`}>
                  お問合わせ・撮影依頼
                </h3>
                <p className={`${style.ct_form} ${media.ct_form_sp}`}>
                  contact form
                </p>
                <p className={`${style.ct_exp} ${media.ct_exp_sp}`}>
                  お気軽にご相談・お問合わせください！
                </p>
              </div>
            </div>
          </div>
          <div className={style.cp_box}>
            <div className={style.cp_txt}>
              <p className={media.cp_txt_sp}>
                Copyright - all rights reversed.
              </p>
              <p className={`${style.cp_slash} ${media.cp_slash_sp}`}>/</p>
              <p className={media.cp_txt_sp}>Direction and design - Walnut.</p>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}
