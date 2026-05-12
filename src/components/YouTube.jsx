import React from 'react';
import s from './YouTube.module.css';

const VIDEOS = [
  {
    title: 'Easy Liquify Filter in Photoshop',
    link: 'https://www.youtube.com/watch?v=nfsmSpYFErA',
  },
  {
    title: 'Body Shape Correction in Photoshop',
    link: 'https://www.youtube.com/watch?v=JniIWyScwBs',
  },
];

// YouTube ID extract garne
const getYoutubeId = (url) => {
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/;

  const match = url.match(regExp);
  return match ? match[1] : '';
};

export default function YouTube() {
  return (
    <section className={`sec ${s.sec}`} id="youtube">
      <div className="wrap">
        <div className={s.top}>
          <div>
            <span className="label">Tutorials</span>
            <h2 className="h2">
              My <span className="g">YouTube</span>
            </h2>
          </div>
        </div>

        <div className={s.grid}>
          {VIDEOS.map((video, i) => {
            const id = getYoutubeId(video.link);
            const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

            return (
              <a
                key={i}
                href={video.link}
                target="_blank"
                rel="noreferrer"
                className={`glass ${s.card}`}
              >
                <div className={s.thumb}>
                  <img src={thumb} alt={video.title} />

                  <div className={s.play}>▶</div>

                  <span className={s.tag}>Tutorial</span>
                </div>

                <div className={s.body}>
                  <h3 className={s.title}>{video.title}</h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}