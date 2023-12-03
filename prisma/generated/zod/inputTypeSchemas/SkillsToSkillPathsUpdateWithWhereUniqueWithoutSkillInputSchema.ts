import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsWhereUniqueInputSchema } from './SkillsToSkillPathsWhereUniqueInputSchema';
import { SkillsToSkillPathsUpdateWithoutSkillInputSchema } from './SkillsToSkillPathsUpdateWithoutSkillInputSchema';
import { SkillsToSkillPathsUncheckedUpdateWithoutSkillInputSchema } from './SkillsToSkillPathsUncheckedUpdateWithoutSkillInputSchema';

export const SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillsToSkillPathsUpdateWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillInputSchema;
