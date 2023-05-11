import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { ArrowDropDown } from "@mui/icons-material";
import { Button, Popover, List, ListItem, ListSubheader, ListItemButton, ListItemText } from "@mui/material";

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  ar: { label: "العربية", dir: "rtl", active: false },
  ta: { label: "தமிழ்", dir: "ltr", active: false }
};

const LanguageSelect = () => {
  let selected = localStorage.getItem("i18nextLng") || "en";
  if(selected.substring(0, 2) == "en") selected = "en";
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);
  console.log("hellooo");
  console.log(selected);
  return (
    <div className="d-flex justify-content-end align-items-center language-select-root">
      <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {languageMap[selected].label}
        <ArrowDropDown fontSize="small" />
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div>
          <List>
            <ListSubheader>{t("select_language")}</ListSubheader>
            {Object.keys(languageMap)?.map(item => (
              <ListItem
                key={item}
              >
                <ListItemButton onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}>
                  <ListItemText primary = {languageMap[item].label}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelect;
