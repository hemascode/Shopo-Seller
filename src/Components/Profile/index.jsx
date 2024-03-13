import { Breadcrumb } from "@/common/Breadcrumb";
import ProfileCard from "@/common/ProfileCard";

export const Profile = () => {
  return (
    <>
      <Breadcrumb currentPage={"Profile"} serachEnable />
      <ProfileCard Name="Alec Thompson" Title="Profile Picture">
        <span className="mt-3">
          <form>
            <input type="file" id="myFile" name="filename" />
          </form>
        </span>

        <div className="card-body ">
          <form role="form">
            <label>Name</label>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="Name-addon"
              />
            </div>
            <label>Email</label>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="Email-addon"
              />
            </div>
            <label>Password</label>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="password-addon"
              />
            </div>
            <label>Confirm Password</label>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Condirm Password"
                aria-label="Confirm password"
                aria-describedby="Confirmpassword-addon"
              />
            </div>

            <div className="text-center">
              <button
                type="button"
                className="btn bg-gradient-info w-100 mt-4 mb-0"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </ProfileCard>
    </>
  );
};
