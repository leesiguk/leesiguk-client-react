import React from 'react';
import styled from 'styled-components';
import { Game } from '../../containers/Main';

const ShareBlock = styled.div`
  position: absolute;
  top: 0;
  right: 44px;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  padding: 4px 12px 4px 12px;

  &.slide-enter {
    transform: translateX(10px);
    opacity: 0;
  }

  &.slide-enter-active {
    transform: translateX(0);
    opacity: 1;
  }

  &.slide-exit {
    transform: translateX(0);
    opacity: 1;
  }

  &.slide-exit-active {
    transform: translateX(10px);
    opacity: 0;
  }

  &.slide-enter-active,
  &.slide-exit-active {
    transition: all 0.2s ease;
  }
`;

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  padding: 8px;
  margin: 0 4px;

  img {
    width: 100%;
  }
`;

interface ShareProps {
  game: Game;
}

const Share: React.FC<ShareProps> = ({ game }) => {
  const shareKakaoTalk = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${game.japan.name} vs ${game.korea.name}`,
        description:
          '이시국닷컴에서 다양한 한일 브랜드의 트랜드를 비교 해보세요.',
        imageUrl: 'https://www.leesiguk.com/img/icons/social-810x810.png',
        link: {
          mobileWebUrl: 'https://www.leesiguk.com',
          webUrl: 'https://www.leesiguk.com',
        },
      },
      buttons: [
        {
          title: '트랜드 확인하기',
          link: {
            mobileWebUrl: 'https://www.leesiguk.com',
            webUrl: 'https://www.leesiguk.com',
          },
        },
      ],
    });
  };

  const shareFacebook = () => {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=https://www.leesiguk.com',
    );
  };
  return (
    <ShareBlock>
      <SocialButton onClick={shareKakaoTalk}>
        <img src="/img/kakaotalk.png" alt="kakaotalk share" />
      </SocialButton>
      <SocialButton onClick={shareFacebook}>
        <img src="/img/facebook.png" alt="facebook share" />
      </SocialButton>
    </ShareBlock>
  );
};

export default Share;
