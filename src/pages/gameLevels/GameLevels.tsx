import './game-levels.css';

import React, { FC, useEffect, useState } from 'react';
import b_ from 'b_';
import { Heading } from 'grommet';
import { useSelector } from 'react-redux';

import { useAsyncAction, useAuth } from '../../hooks';
import { getText } from '../../common/langUtils';
import levels from '../game/levels';
import { GameLevel } from './Components/GameLevel';
import { getAllowedLevels } from './selectors';
import { getCurrentLevel } from '../game/selectors';
import { asyncGameLevelActions } from './asyncActions';
import { LoadingOverlay } from '../../components/LoadingOverlay/LoadingOverlay';

const block = b_.lock('game-levels');

export const GameLevels: FC = () => {
  const fetchAllowedLevels = useAsyncAction(asyncGameLevelActions.fetchAllowedLevels);

  const [isLoading, setIsLoading] = useState(true);

  const allowedLevels = useSelector(getAllowedLevels);
  const currentLevel = useSelector(getCurrentLevel);

  const isLevelAllowed = (level: number): boolean => {
    return allowedLevels.includes(level);
  };

  const isLevelSelected = (level: number): boolean => {
    return currentLevel === level;
  };

  useEffect(() => {
    if (!allowedLevels.length) {
      fetchAllowedLevels(undefined)
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <LoadingOverlay isLoading={isLoading}>
      <div className={block()}>
        <Heading
          textAlign="center"
          level="2"
        >
          {getText('levels_page_header')}
        </Heading>
        <div className={block('box')}>
          {levels.map((levelObject, index) => {
            return (
              <GameLevel
                key={index}
                levelIndex={index}
                levelObject={levelObject}
                isAllowed={isLevelAllowed(index)}
                isSelected={isLevelSelected(index)}
              />
            );
          })}
        </div>
      </div>
    </LoadingOverlay>
  );
};
