// document reference: https://www.geeksforgeeks.org/a-search-algorithm/
// wiki: https://vi.wikipedia.org/wiki/Gi%E1%BA%A3i_thu%E1%BA%ADt_t%C3%ACm_ki%E1%BA%BFm_A*

// Theoraphy
// - Each step pick the node according to the value f(x) = g(x) + h(x) (f(x) is lowest value)
// - g(x) and h(x) is define below:
// g = the movement cost to move from the starting point to a given square on the grid, following the path generated to get there
// h = the estimated movement cost to move from that given square on the grid to the final destination (heuristic)

// Implementation
// 1.  Initialize the open list
// 2.  Initialize the closed list
//     put the starting node on the open 
//     list (you can leave its f at zero)

// 3.  while the open list is not empty
//     a) find the node with the least f on 
//        the open list, call it "q"

//     b) pop q off the open list
  
//     c) generate q's 8 successors and set their 
//        parents to q
   
//     d) for each successor
//         i) if successor is the goal, stop search
        
//         ii) else, compute both g and h for successor
//           successor.g = q.g + distance between 
//                               successor and q
//           successor.h = distance from goal to 
//           successor (This can be done using many 
//           ways, we will discuss three heuristics- 
//           Manhattan, Diagonal and Euclidean 
//           Heuristics)
          
//           successor.f = successor.g + successor.h

//         iii) if a node with the same position as 
//             successor is in the OPEN list which has a 
//            lower f than successor, skip this successor

//         iV) if a node with the same position as 
//             successor  is in the CLOSED list which has
//             a lower f than successor, skip this successor
//             otherwise, add  the node to the open list
//      end (for loop)
  
//     e) push q on the closed list
//     end (while loop)

