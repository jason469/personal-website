import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useRef, useState} from "react";
import styles from "./VolunteeringCard.module.scss";
import AnimateHeight from 'react-animate-height';
import parse from "html-react-parser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ExpandMore = styled((props) => {
    const {expand, ...other}: any = props;
    return <IconButton {...other} />;
})(({theme, expand}: any) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

type volunteeringCardProp = {
    data: volunteeringData
}

export default function VolunteerCard({data}: volunteeringCardProp) {
    const hiddenDescription = useRef(document.createElement("div"));

    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState(0)
    const [descriptionHeight, setDescriptionHeight] = useState(0)
    const [showDescriptionHeight, setShowDescriptionHeight] = useState(true)

    const calculateDescriptionHeight = async () => {
        let item = hiddenDescription.current
        if (item !== null) {
            setDescriptionHeight(item.clientHeight)
            setShowDescriptionHeight(false)
        }
    }


    useEffect(() => {
        calculateDescriptionHeight()
    }, []);


    const expandCard = () => {
        setExpanded(!expanded);
        setHeight(!expanded ? descriptionHeight : 0)
    };

    return (<div>
        {showDescriptionHeight && <Card
            className={`${styles.card}`}
            id={`volunteerCard__${data.company}__hideCard`}
            ref={hiddenDescription}
        >
            <div
                id={`volunteerCard_${data.company}__hide`}
            >
                <div>
                    <Typography paragraph>
                        {data.longDescription}
                    </Typography>
                    <a href={data.website} target="_blank">
                        Click here to see their website!
                    </a>
                </div>
            </div>
        </Card>}
        <Card
            className={`${styles.card}`}
        >
            <CardHeader
                title={<a href={data.website} target="_blank">{data.company}</a>}
                subheader={`${data.title} (${data.startYear} - ${data.endYear})`}
                className={`${styles.card__header}`}
            />
            <div
                className={`${styles.card__image_container}`}
            >
                <img
                    src={`/sections/volunteering/logos/${data.logoName}`}
                    alt={` ${data.title}`}
                    className={`${styles.card__image_container__image}`}
                />
            </div>
            <CardContent
                className={`${styles.card__content}`}
            >
                <Typography variant="body2" color="text.secondary">
                    {parse(data.shortDescription)}
                </Typography>
            </CardContent>
            <CardActions
                disableSpacing
                className={`${styles.card__actions}`}
            >
                <ExpandMore
                    expand={expanded}
                    onClick={expandCard}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <FontAwesomeIcon icon={faCaretDown}/>
                </ExpandMore>
            </CardActions>
            <AnimateHeight
                duration={500}
                height={height}
            >
                <Collapse
                    in={expanded}
                    unmountOnExit
                    timeout={30}
                >
                    <CardContent>
                        <div
                            className={`${styles.card__additional_content}`}
                        >
                            {parse(data.longDescription)}
                            <br/>
                            <a href={data.website} target="_blank">
                                Click here to see their website!
                            </a>
                        </div>
                    </CardContent>
                </Collapse>
            </AnimateHeight>
        </Card>
    </div>);
}