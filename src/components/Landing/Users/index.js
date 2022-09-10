import React from "react";
import Icon1 from "../../images/company.png";
import Icon2 from "../../images/login.png";
import Icon3 from "../../images/Tour.png";

import {
  UsersContainer,
  UserH1,
  UserWrapper,
  Usercard,
  UserIcon,
  UserH2,
  UserP,
} from "./UsersElements";

const index = () => {
  return (
    <UsersContainer id="Users">
      <UserH1>Our Users</UserH1>
      <UserWrapper>
        <Usercard>
          <UserIcon src={Icon1} />
          <UserH2>Single User</UserH2>
          <UserP>
            Name,DOB,phone number verification to be done need the number which
            is connected to the candidates aadhar ,profile picture skills
            automated boxes shall be there like internshala option in the “add
            skills”part
          </UserP>
        </Usercard>
        <Usercard>
          <UserIcon src={Icon2} />
          <UserH2>Entrepreneur</UserH2>
          <UserP>
            After signing up as a entrepreneur post your business/company
            idea.Need to select the generic field his company is belonging like
            software making, cloud development etc
          </UserP>
        </Usercard>
        <Usercard>
          <UserIcon src={Icon3} />
          <UserH2>Investor</UserH2>
          <UserP>
            owner of the business or concept or can be called company login
            signup as investor big giants as well as small companies{" "}
          </UserP>
        </Usercard>
      </UserWrapper>
    </UsersContainer>
  );
};

export default index;
