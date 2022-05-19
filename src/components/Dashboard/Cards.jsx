import { Box, Card, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";

export const Cards = () => {
    const [name, setName] = useState("")
  useEffect(() => {
    let data = sessionStorage.getItem('data');
    setName(data)  
}, [])

  return (
    <Box sx={{ mb: 20 }}>
      <Box sx={{ display: "flex" }}>
        
      </Box>
      <Box>
        <Box>
          <Card
            sx={{
              background:
                " radial-gradient(circle, rgba(94,9,107,0.9640231092436975) 0%, rgba(20,2,46,1) 100%, rgba(23,3,22,0.3169642857142857) 100%, rgba(21,10,62,1) 131%)",
              height: 145,
              p: 2,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h4"
                color="rgb(106,153,101)"
                component="div"
                sx={{ mb: 2, flexGrow: 1 }}
              >
                <i>Finhalo</i>
              </Typography>
              <Box
                sx={{
                  background: "white",
                  p: 3,
                  width: 1,
                  borderRadius: "85%",
                  position: "relative",
                  right: -75,
                  top: -50,
                }}
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  style={{ width: "50px" }}
                />
              </Box>
            </Box>
            <Box sx={{ position: "relative", top: -50 }}>
              <Typography sx={{ mb: 2, px: 3 }} variant="h5" color="white">
                # 8903 2898 **** **** 2092
              </Typography>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <Box sx={{ color: "white", flexGrow: 1 }}>
                  <Typography> {name}</Typography>
                  <Typography variant="body2">04/23</Typography>
                </Box>
                <img
                  src="data:image/jpeg;base64,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HP4TPO+wNRU1K0ZzgfaU492TwH1InqG6oLVRqbjKurKw8VYYP0M8q7QaPW0+5e2fIZGyjDK7y81dfUY9DnwgesMTMqnZPpatmpLT1Dep1VAUuFLJUwMbxC8VbxGMeHgNlqfSxp6DdtFqXNVjhERGUMx5ZLDPyBPlAm+pajRtkNWu606YIBZjhck4A9czuAyBaDs5d3dZb/VyCynetrYfyqHgzD7z8O/OPkBPRAzERAREQEREBERA+TIdtfsktzmtQwtYDiDwWoB4+B8/nJlMTG1YtG0tuHNfDeL0naYUDWosjFXUqynDKwww9pxy6tb0C2uxiqvaA7Ljg6+h8PI8JAtV2EuqWTRIrL7K4/SeB9j7SHfBaO3Z1Ol4vhyxtk6T+yJTd7GVdy+oHuLMp896m+B88TVXVpVpHFRGU/1KQPYkYM7GiVwlxRcngtUE8e4c/pNdN4tG6bqbVy4LRXrvE/6bnb/UetuigPZpLuj8zYLH9h7SMTkrXBquznizOzEDicsScD5zZ6fs1e18blFlB+83YA+fH6TK0WvaZhhgth02CtbWiNoaiSHZnZereMGbK0Qe0/Iv5J4/m5e8leibBUaeHuT1rfhximPUfe9+HlJnTQAAAAAcgOU248HnZU63jETE0wfX7Ooml0BR+z9Wppbm4UIBUr3gg85CL/og0yqxZGr0s/dR1KD031Yj5yxokvs56ZmZ3lB9F6LtKtmDmm1dgcg1mDgfoUBT7gyaogAAAwBwAHAATkiHhIjqfR3pVzVevWoM1R2yzdbUGTy5BsDgJLogcdKmEUKowAAFHcABgCckRAREQMSO7ObJW1g9arS3mqV6jO7vgsAxJ3FwBhcknx8TwEkcQEREBNJtDsxZ6goW5pht3O6wO66Z57rDiOQ4cuE3cQKxHQvpuc9dc48N+n+/VyXbP7I2FhxtqCq2OLt2qh8e03EDyGBJBEDGJmIgIiICIiAiIgIiICIiBjEYmYgcZQHmJ1206gTk0kz47i5/aduJ5s9i0x2lwUrVF+FFX0AH7TmxMxPSZme5iAJmIeEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z"
                  alt=""
                  style={{ width: 70, borderRadius: 5 }}
                />
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};
