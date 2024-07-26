import { useState } from 'react';
import { NaviContainer, NaviContentBox, NaviContentPageBox, NaviContentPageBtn } from '../../styles/LayoutStyles';
import { CommonBtn } from '../../styles/CommonStyles';
import next from '../../assets/icons/next.svg';
import previous from '../../assets/icons/previous.svg';

function NaviComponent() {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <NaviContainer>
      <NaviContentBox>
        <CommonBtn
          width="92px"
          boxShadow=" 0 0 0 2px var(--point-borderColor) inset"
          color="var(--black-fontColor)"
          background="var(--white-bgColor)"
        >
          <img src={previous} alt="previous page" style={{ margin: '0px 8px 0px 0px' }} />
          Previous
        </CommonBtn>
        <NaviContentPageBox>
          {[1, 2, 3, 4].map((page) => (
            <NaviContentPageBtn key={page} active={activePage === page} onClick={() => handlePageClick(page)}>
              {page}
            </NaviContentPageBtn>
          ))}
        </NaviContentPageBox>
        <CommonBtn width="92px" color="var(--white-fontColor)" background="var(--point-bgColor)">
          Next
          <img src={next} alt="next page" style={{ margin: '0px 0px 0px 8px' }} />
        </CommonBtn>
      </NaviContentBox>
    </NaviContainer>
  );
}

export default NaviComponent;
