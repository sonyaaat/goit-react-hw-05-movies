"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{687:function(A,C,g){g.d(C,{Hc:function(){return n},QA:function(){return J},Ti:function(){return s},qw:function(){return Q},zO:function(){return E}});var I=g(388),B="0d85f901dc2f856c4326c302a68bd324",s=function(){return I.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(B))},J=function(A){return I.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(B,"&query=").concat(A,"&page=1"))},Q=function(A){return I.Z.get("https://api.themoviedb.org/3/movie/".concat(A,"?api_key=").concat(B,"&language=en-US"))},n=function(A){return I.Z.get("https://api.themoviedb.org/3/movie/".concat(A,"/credits?api_key=").concat(B,"&language=en-US"))},E=function(A){return I.Z.get("https://api.themoviedb.org/3/movie/".concat(A,"/reviews?api_key=").concat(B,"&language=en-US&page=1"))}},541:function(A,C,g){g.r(C);var I=g(885),B=g(204),s=g(791),J=g(739),Q=g(687),n=g(544),E=g(184);C.default=function(){var A=(0,s.useState)(null),C=(0,I.Z)(A,2),g=C[0],k=C[1],r=(0,s.useState)(!1),w=(0,I.Z)(r,2),e=w[0],t=w[1],a=(0,J.UO)().movieId;if((0,s.useEffect)((function(){t(!0),(0,Q.Hc)(a).then((function(A){return k(A.data.cast)})).catch((function(A){return console.log(A)})).finally(t(!1))}),[g,a]),g)return(0,E.jsxs)(E.Fragment,{children:[e&&(0,E.jsx)(B.Z,{}),g.length>0?(0,E.jsx)("ul",{children:g.map((function(A){var C=A.id,g=A.original_name,I=A.profile_path,B=A.character;return(0,E.jsxs)("li",{children:[(0,E.jsx)("img",{width:200,height:300,src:I?"https://image.tmdb.org/t/p/w200/".concat(I):n,alt:g}),(0,E.jsx)("p",{children:(0,E.jsx)("b",{children:g})}),(0,E.jsxs)("p",{children:["Character: ",B]})]},C)}))}):(0,E.jsx)("p",{children:"We don`t have any information about cast"})]})}},544:function(A){A.exports="data:image/png;base64,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Xh2NNWsihobKVwE15G9a6DetVhy+9944+Otfx0v33RfTzz776q3RiCXvfW+c/NGPxoqrrno5uFhUrZdeioO//GUcuvvueGnLlmgdOvTKbWjZslh60UWx7JOfjOWf+1wMLVnyP78SqBOPCKGPHH388di7fn08e9llcfD2218bVxERMzNx5NFH4z/f/W7sOvPM+M8NN0RrcvK1r6FrDt5xR+w+55x47qqr4vA997wmriIiWocOxeF77onnrroqdp99dhy8447X3IH6EFjQJ/77i1/E3vXr48gjj5SnY2odPBj/d+ON8eyll8b0/v3lmUStycl4/uqr48AVV8TUM8+U52OaeuaZOHDFFfH8V78qgqGGBBb0gYO33x7Pff7z0TpypDyd0Et/+lPsXb8+pnftKk8kaB09Ggc+/el48cc/Lk8defFHP4rnN22KaLXKE1BhAgtq7ujWrfHcl75UznMytW1b7L3oopjevbs8sQCto0fjwGc+E4fuvrs8zcl/b7stXrz11nIGKkxgQZ21WvH81VfP6ztXpalt22Lvhg0iK0lWXLX959vfjpnnnitnoKIEFtTY4fvvjyN/+Us5z5vIypEdVxERMy+8EC/84AflDFSUwIIaO3TnneW0YCJrYboRV20H77zTz2JBTQgsqLHD991XTilE1vx0M64iIqZ27Iipf/2rnIEKElhQU61Dh2J6z55yTiOy5qbbcdU2KbCgFgQW1NT0vn3llE5kdWax4ioiYnrv3nICKkhgQU0NLV9eTl0hso5vMeMqIqKxYkU5ARUksKCmmm98YwyddFI5d4XIOrbFjquIiObpp5cTUEECC+qq0YglF15Yrl0jsl6rF3E1tHRpjJx/fjkDFSSwoMZOvuyycuoqkfWyXsRVRMTSiy+OoWXLyhmoIIEFNbbiyiujsXJlOXfVoEdWr+IqImLl175WTkBFCSyoscaaNbHyW98q564b1MjqZVyd/KEPxdJLLilnoKIEFtTcG669NpZeemk5d92gRVYv46p5+umx5uc/L2egwgQW1N3wcJx6xx1x0rnnlpeuG5TI6mVcNUZHY+3dd0fzTW8qT0CFCSzoA43Vq2NsyxaR1QU9j6v77ouR97ynPAEVJ7CgTzTHxkRWsirE1ZL3va88ATUgsKCPiKw84gpYCIEFfUZkLZy4AhZKYEEfElnzJ66ADAIL+pTImjtxBWQRWNDHRFbnxBWQSWBBnxNZJyaugGwCCwaAyJqduAK6QWDBgBBZryeugG4RWDBAeh1Z+y66qDKR1Tp6NA589rPiCugKgQUDppeRNfnPf1Yisl6Jq7vuKk9dJ65gMAgsGECDHFniClgMAgsG1CBGlrgCFovAggE2SJElroDFJLBgwA1CZIkrYLEJLKCvI0tcAb0gsICI6M/IEldArwgs4BX9FFniCuglgQW8Rj9ElrgCek1gAa9T58gSV0AVCCzgmOoYWeIKqAqBBcyqTpElroAqEVjAcdUhssQVUDUCCzihKkeWuAKqSGABHXklst72tvLUdbNFVs/j6v77xRVwTAIL6FhzbCzGHnywEpFVibi68MLyBBARAguYoypE1tTTT4sroNIEFjBnvY6sPeedJ66AShNYwLz0MrJm/vvfcuo6cQXMhcAC5q2XkbWYxBUwVwILWJB+jyxxBcyHwAIWrF8jS1wB8yWwgBT9FlniClgIgQWk6ZfIElfAQgksIFXdI0tcARkEFpCurpElroAsAgvoirpFlrgCMgksoGvqElniCsgmsICuqnpkiSugGwQW0HVVjSxxBXSLwAIWRdUiS1wB3SSwgEVTlcgSV0C3CSxgUTXHxmLt/fdHY3S0PC2KoUYj3virX4kroKsEFrCoWpOTMXH11THz4ovlaVG0ZmZi4utfj+k9e8oTQBqBBSya1uRkHPjMZ+LQXXeVp0U1+c9/xr4NG0QW0DUCC1gUVYmrNpEFdJPAArquanHVJrKAbhFYQFdVNa7aRBbQDQIL6Jqqx1WbyAKyCSygK+oSV20iC8gksIB0dYurNpEFZBFYQKq6xlWbyAIyCCwgTd3jqk1kAQslsIAU/RJXbSILWAiBBSxYv8VVm8gC5ktgAQvSr3HVJrKA+RBYwLz1e1y1iSxgrgQWMC+9jKuhxuL/1SWygLlY/L+lgNrrZVw1Rkfj1N//Pk5629vKU9eJLKBTAguYk17H1do//CFO/shHYmzLFpEFVJbAAjpWhbhacsEFERHRXLtWZAGVJbCAjrQmJ+PAZz9bibhq63lkXXSRyAKOSWABJ/RKXP32t+Wp62aLq7aeRtaTT4os4JgEFnBcVY6rNpEFVI3AAmZVh7hqE1lAlQgs4JjqFFdtIguoCoEFvE4d46pNZAFVILCA16hzXLWJLKDXBBbwin6IqzaRBfSSwAIior/iqk1kAb0isIC+jKs2kQX0gsCCAdfPcdUmsoDFJrBggA1CXLWJLGAxCSwYUIMUV20iC1gsAgsG0CDGVZvIAhaDwIIBM8hx1SaygG4TWDBAehpXK1dWIq7aXomst7+9PHWdyIL+J7BgQPQ8ru6/vzJx1dZcuzbGHnxQZAHpBBYMAHE1O5EFdIPAgj4nrk5MZAHZBBb0MXHVOZEFZBJY0KfE1dyJLCCLwII+JK7mT2QBGQQW9BlxtXAiC1gogQV9RFzlEVnAQggs6BPiKp/IAuZLYEE/mJqKA1dcIa66oBKRtXdveQIqTmBBH5j45jfj0G9+U85d1+9x1dbryNr/qU9F66WXyhNQYQILau7QnXfGCz/8YTl33aDEVVsvI+vIo4/GxNe+Vs5AhQksqLHWkSMxce215dx1gxZXbb2MrBd/+tOYfOKJcgYqSmBBjR381a9i6umny7mrBjWu2noWWTMz8cJNN5UrUFECC2pssX+ofdDjqq1XkXXod7+LmJoqZ6CCBBbUVasVLz3wQLl2jbh6rV5E1szERBzZurWcgQoSWFBTMxMT0Tp8uJy7QlwdWy8ia3rXrnICKkhgQU3NTEyUU1eIq+Nb7MharD93YGEEFtRUY9WqckonrjqzmJG1GH/uwMIJLKipxqpVMbRsWTmnEVdzs1iRNfzmN5cTUEECC+pqaCiWfvCD5ZpCXM1PtyOrsXp1jJx/fjkDFSSwoMaWXX55OS2YuFqYbkbWsk98ImJ4uJyBChJYUGPLr7gihs88s5znTVzl6EpkNZvxhu98p1yBihJYUGNDIyOx6vvfL+d5EVe5siNr9CtfieGzzipnoKIEFtTcsssvj5Xf+EY5z4m46o6syFqyfn1aSAOLQ2BBH1h1000x+uUvl3NHmuPjMfbgg+KqS5pr18bYli2x5AMfKE8dWfL+98epd90VQyMj5QmoMIEF/aDZjNU/+Umsue22OX1O0skf/nC86bHHYuTd7y5PJGqeemqM/fGPsfKaazr/IfVmM1Zec02MPfBANE89tbwCFSewoI+s+MIXYnzHjnjDddfF8Lp15TkiIoaWLo2TP/axGNuyJdbee280TzutfAldMDQyEqtuvjnG//GPWPHFL84aTY01a2LFlVfG+D/+Eatuvtl3rqCmOvynFFAXjVNOiVNuvDFOueGGmPrXv2Jyx46YefbZGFq2LJqnnRYj55/f1Q8o5fiG162LNT/7WcStt8bRv/0tpv/975iZmIjGqlXRHB+PkXe+M6LZLH8ZUDMCC/rV0FAMn3WW/3lWVc3myx8a6oNDoS95RAgAkExgAQAkE1gAAMkEFgBAMoEFAJBMYAEAJBNYAADJBBYAQDKBBQCQTGABACQTWAAAyQQWAEAygQUAkExgAQAkE1gAAMkEFgBAMoEFAJBMYAEAJBNYAADJBBYAQDKBBQCQTGABACQTWAAAyQQWAEAygQUAkExgAQAkGy4HYH4OHjwYf/3rX8sZam3nzp3lBHRAYEGi7du3lxMAA8gjQgCAZAILACCZwAIASCawAACSCSw4jkbDWwQ65f0Cr/JugONYsWJFOQGzGB0dLScYWAILjuOMM86IoaGhcgaO4YwzzignGFgCC45j1apVcc4555QzUFizZk2cffbZ5QwDS2DBCbzjHe/wL3M4jjVr1sT69et9txf+h09yhxNoNptxwQUXxFve8pZ44oknYmJiIqanp8uXwUAZGhqK0dHROPPMM+Pss88WV1AQWNCh8fHxGB8fL2cAeB2PCAEAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgmsZNu3by8nAGDACCwAgGQCCwAgmcDq0P79+8sJAOCYBBYAQLLhcmBh9u/fHw8//HA5A0CtbNu2rZyi0fB9mU4JrA69613viq1bt5bz6+zcuTN27txZzgBQe+Pj4+XELKRoh9atW1dOADBQfC3snMDq0IYNG+K0004rZwAYCGNjY3HxxReXM7MQWB0aGRmJTZs2iSwABs7Y2Fhs2rQpRkZGyhOz8DNYczA+Ph7XXXddbNmyJbZt2xa7du2KmZmZ8mUAUHuNRiPGx8dj3bp1cfHFF4urORJYczQyMhIbN26MjRs3licAgIjwiBAAIJ3AAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGTD5TBXmzdvjuHhBf82AACVsHnz5nKas6GImIqIZnkAAGB+PCIEAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBk/w/ofY+SgxuzNAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=541.864d38c1.chunk.js.map