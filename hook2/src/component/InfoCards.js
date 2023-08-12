import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard({ data, setData }) {
  const navigate = useNavigate()
  const deleteInfo = (id) => {
    setData(data.filter((el) => el.id !== id));
  };
  return (
    <div class="cards">
      {data.map((el) => (
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image="/images/img.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {el.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {el.id}
              </Typography>
              <button class="btn2" onClick={() => deleteInfo(el.id)}>
                Delete
              </button>
              <button class="btn2" onClick={()=>navigate(`/description/${el.id}`) } >
                Description
              </button>
              <div class="responsive-box"></div> 
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
