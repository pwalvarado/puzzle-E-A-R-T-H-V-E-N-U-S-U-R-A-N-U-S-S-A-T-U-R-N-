//     E A R T H
//  +  V E N U S
//  U R A N U S
//   ------------
//  S A T U R N

let E,A,R,T,H,V,N,U,S;

const reducer = (acc, current, idx) => acc + current * (10 ** idx);
for (let e = 0; e <= 9; e++) {
  E = e
  for (let a = 0; a <= 9; a++) {
    if (e !== a) {
      A = a
      for (let r = 0; r <= 9; r++) {
        if (r !== e && r !== a) {
          R = r
          for (let t = 0; t <= 9; t++) {
            if (t !== e && t !== a && t !== r) {
              T = t
              for (let h = 0; h <= 9; h++) {
                if (h !== e && h !== a && h !== r && h !== t) {
                  H = h
                  for (let v = 0; v <= 9; v++) {
                    if (v !== e && v !== a && v !== r && v !== t && v !== h) {
                      V = v
                      for (let n = 0; n <= 9; n++) {
                        if (n !== e && n !== a && n !== r && n !== t && n !== h && n !== v ) {
                          N = n
                          for (let u = 0; u <= 9; u++) {
                            if (u !== e && u !== a && u !== r && u !== t && u !== h && u !== v && u !== n) {
                              U = u
                              for (let s = 0; s <= 9; s++) {
                                if (s !== e && s !== a && s !== r && s !== t && s !== h && s !== v && s !== n && s !== u) {
                                  S = s
                                  const earth = [E, A, R, T, H];
                                  const venus = [V, E, N, U, S];
                                  const uranus = [U, R, A, N, U, S];
                                  const saturn = [S, A, T, U, R, N];
                                  if (
                                    earth.reverse().reduce(reducer) + venus.reverse().reduce(reducer) + uranus.reverse().reduce(reducer) ===
                                    saturn.reverse().reduce(reducer)
                                  ) {
                                    console.log('earth', E, A, R, T, H);
                                    console.log('vnus', V, N, U, S);
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
