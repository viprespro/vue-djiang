import XEUtils from "xe-utils";
import BrowserUtils from "./BrowserUtils";
import RegUtils from "./RegUtils";
import DateUtils from "./DateUtils";
import StringUtils from "./StringUtils";
import ArrayUtils from "./ArrayUtils";
// import DictUtils from "./DictUtils";
import OtherUtils from "./OtherUtils";

XEUtils.mixin(
  Object.assign(
    BrowserUtils,
    DateUtils,
    RegUtils,
    StringUtils,
    ArrayUtils,
    // DictUtils,
    OtherUtils
  )
);

export default XEUtils;
