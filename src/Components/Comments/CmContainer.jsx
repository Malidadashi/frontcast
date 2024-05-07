import React from "react";
import jalali from "../../assets/jalali.jpg";
import CmItems from './CmItems'
const CmContainer = () => {
// 
  const x = [
    {
      user: "علی جلالی",
      profilepicture:  jalali,
      userscomment:
        "من در چند دوره‌ی ویدیویی و حضوری آموزش برنامه نویسی شرکت کرده بودم، ولی با حضور در دوره‌های ری‌اکت و نود جی‌اس استاد صدری به عمیق‌ترین مفاهیم برنامه نویسی جاوااسکریپت پی بردم. روش تدریس ایشون رو تا به حال در هیچ کدوم از دوره‌های مشابه ندیده بودم. از مفاهیم بسیار ساده شروع شده و پله پله بدون اینکه کسی لحظه‌ای از کلاس عقب بمونه تمام حاضرین رو تا رسیدن به پیشرفته‌ترین مراحل با خودشون همراه می‌کردن. من به شخصه کل پیشرفت‌هایی که در زمینه برنامه نویسی داشتم رو مدیون ایشون هستم. بعد از اتمام دوره‌ها توسط ایشون به یک شرکت دانش بنیان معرفی شدم و هم اکنون با این شرکت در حال همکاری هستم. ",
    },
    // {},
    // {},
    // {},
    // {},
  ];
  //چرا باید حروف کوچیک بنویسیم

  return (
    <section>
      {x.map((item) => {
        return (
          <CmItems
            name={item.user}
            picture={item.profilepicture}
            comment={item.userscomment}
          />
        );
      })}
    </section>
  );
};

export default CmContainer;
