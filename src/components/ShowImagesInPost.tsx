import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

type Props = {
    listImages?: string[];
};
type IStyledStyledShowImageInpost = {
    number?: number;
};
export const ShowImagesInPost = (props: Props) => {
    const { listImages } = props;
    const imagesLength = listImages && listImages.length;
    if (imagesLength && imagesLength > 2) {
        return (
            <StyledShowImageInpost>
                <div className="showImage">
                    <Grid container>
                        {listImages.slice(0, 3).map((image: string, index: number) => (
                            <Grid key={index} xs={12} sm={6}>
                                <div className="image__wrapper">
                                    <img className="image__item" src={image} alt="image of post" />
                                </div>
                            </Grid>
                        ))}
                        <Grid xs={12} sm={6}>
                            <div className="image__wrapper">
                                <div className="image__layer"></div>
                                <span className="image__number">+ {imagesLength - 4} </span>
                                <img
                                    className="image__item"
                                    src={listImages[3]}
                                    alt="image of post"
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </StyledShowImageInpost>
        );
    }
    if (imagesLength && imagesLength <= 2) {
        return (
            <StyledShowImageInpost>
                <div className="showImage">
                    <Grid container justifyContent="center">
                        {listImages.map((image: string, index: number) => (
                            <Grid key={index} xs={12} sm={8}>
                                <div className="image__wrapper">
                                    <img className="image__item" src={image} alt="image of post" />
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </StyledShowImageInpost>
        );
    }
    return <></>;
};
export const StyledShowImageInpost = styled.div<IStyledStyledShowImageInpost>`
    width: 100%;
    .image {
        &__wrapper {
            width: 100%;
            height: 300px;
            position: relative;
            cursor: pointer;
            @media (max-width: 980px) {
                height: 200px;
            }
            /* min-height: 300px; */
        }
        &__item {
            width: 100%;
            height: 100%;
            max-height: 300px;
        }
        &__layer {
            position: absolute;
            z-index: 1;
            font-weight: bold;
            height: 100%;
            width: 100%;
            background-color: black;
            opacity: 0.5;
        }
        &__number {
            position: absolute;
            z-index: 2;
            font-weight: bold;
            color: white;
            font-size: 36px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;
