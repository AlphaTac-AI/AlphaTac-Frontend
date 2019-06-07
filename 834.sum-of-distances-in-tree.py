#
# @lc app=leetcode id=834 lang=python3
#
# [834] Sum of Distances in Tree
#
from collections import defaultdict 
class Solution:
    def sumOfDistancesInTree(self, N: int, edges: List[List[int]]) -> List[int]:
        graph = defaultdict(set)
        for u,v in edges:
            graph[u].add(v)
            graph[v].add(u)
        ans = [0]*N
        size = [1]*N
        def setRoot(node=0,parent=None):
            for child in graph[node]:
                if child != parent:
                    setRoot(child,node)
                    size[node]+=size[child]
                    ans[node]+= ans[child] + size[child]

        def setChild(node=0,parent= None):
            for child in graph[node]:
                if child != parent:
                    ans[child] = ans[node] - size[child] + N - size[child] 
                    setChild(child,node)
        setRoot()
        setChild()
        return ans



