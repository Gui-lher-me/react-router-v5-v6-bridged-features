import { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Options, To } from "./types";

export function useNavigate() {
  const history = useHistory();

  return useCallback(
    (to: To, { replace }: Options) => history[replace ? "replace" : "push"](to),
    [history]
  );
}

type NavigateProps = Options & { to: To };

export function Navigate({ to, replace }: NavigateProps) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace });
  }, [navigate, replace, to]);

  return null;
}

type TransformFunction = (prev: URLSearchParams) => URLSearchParams;

export function useSearchParams() {
  const { search } = useLocation();

  const [params, setParams] = useState(() => new URLSearchParams(search));

  const navigate = useNavigate();

  useEffect(() => {
    navigate({ search: params.toString() }, { replace: true });
  }, [navigate, params]);

  const setSearchParams = (transformFunction: TransformFunction) => {
    setParams(currentSearchParams => {
      const transformedState = transformFunction(currentSearchParams);
      return new URLSearchParams(transformedState);
    });
  };

  return { searchParams: params, setSearchParams };
}
