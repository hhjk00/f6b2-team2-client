import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import * as My from "./MyPageSidebar.styles";

export default function MyPageSidebarUI() {
  const router = useRouter();

  const MYPAGE_MENUS = [
    { name: "MY 홈", page: "/myPage" },
    { name: "레시피관리", page: "" },
    { name: "최근 본 레시피", page: "/myPage/recent", list: true },
    { name: "찜한 레시피", page: "/myPage/wish", list: true },
    { name: "등록 레시피 관리", page: "/myPage/myRecipe", list: true },
    { name: "정기 구독 관리", page: "/myPage/subscribe" },
    { name: "문의 내역", page: "/myPage/qna" },
    { name: "회원 정보 수정", page: "/myPage/edit" },
  ];

  return (
    <My.Container>
      <My.Wrapper>
        <ul>
          {MYPAGE_MENUS.map((el) => (
            <Fragment key={el.page}>
              {!el.list &&
                (el.name === "레시피관리" ? (
                  <My.MenuItem1>
                    <span>{el.name}</span>
                  </My.MenuItem1>
                ) : (
                  <Link href={el.page}>
                    <My.MenuItem1
                      id={el.page}
                      className={router.asPath === el.page ? "isActive" : ""}
                    >
                      <a>{el.name}</a>
                    </My.MenuItem1>
                  </Link>
                ))}

              {el.list && (
                <Link href={el.page}>
                  <My.MenuItem2
                    id={el.page}
                    className={router.asPath === el.page ? "isActive" : ""}
                  >
                    <a>{el.name}</a>
                  </My.MenuItem2>
                </Link>
              )}
            </Fragment>
          ))}
        </ul>
      </My.Wrapper>
    </My.Container>
  );
}
