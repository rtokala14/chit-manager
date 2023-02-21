import { Input } from "./ui/input";
import { Label } from "./ui/label";

function NewChitForm() {
  return (
    <form className=" flex flex-col gap-2">
      <div>
        <Label htmlFor="chitName">Chit Name</Label>
        <Input type="text" id="chitName" placeholder="Enter chit name" />
      </div>
      <div>
        <Label htmlFor="adminCommis">Admin Commission (%)</Label>
        <Input type="number" id="adminCommis" placeholder="5%" />
      </div>
      <div>
        <Label htmlFor="numMonths">Number of months</Label>
        <Input type="number" id="numMonths" placeholder="25" />
      </div>
      <div>
        <Label htmlFor="numInstall">Monthly Installment</Label>
        <Input type="number" id="numInstall" placeholder="20000" />
      </div>
      <div>
        <Label htmlFor="numParticipants">Number of participants</Label>
        <Input type="number" id="numParticipants" placeholder="25" />
      </div>
      <div>
        <Label htmlFor="maxEntries">Max entries per individual</Label>
        <Input type="number" id="maxEntries" placeholder="2" />
      </div>
      <h3>Payment Structure</h3>
      <div className=" flex items-center gap-10">
        <div className=" flex items-center gap-2">
          <input
            type="checkbox"
            id="payVaried"
            name="payVaried"
            value={"varied"}
            // checked={true}
            defaultChecked
          />
          <Label htmlFor="payVaried">Variable</Label>
        </div>
        <div className=" flex items-center gap-2">
          <input
            type="checkbox"
            id="payFixed"
            name="payFixed"
            value={"fixed"}
          />
          <Label htmlFor="payFixed">Fixed</Label>
        </div>
      </div>
    </form>
  );
}

export default NewChitForm;
