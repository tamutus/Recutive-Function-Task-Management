import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillsToSkillPathsSelectSchema } from '../inputTypeSchemas/SkillsToSkillPathsSelectSchema';
import { SkillsToSkillPathsIncludeSchema } from '../inputTypeSchemas/SkillsToSkillPathsIncludeSchema';

export const SkillsToSkillPathsArgsSchema: z.ZodType<Prisma.SkillsToSkillPathsDefaultArgs> = z.object({
  select: z.lazy(() => SkillsToSkillPathsSelectSchema).optional(),
  include: z.lazy(() => SkillsToSkillPathsIncludeSchema).optional(),
}).strict();

export default SkillsToSkillPathsArgsSchema;
