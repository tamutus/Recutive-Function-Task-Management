import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsWhereUniqueInputSchema } from './SkillsToSkillPathsWhereUniqueInputSchema';
import { SkillsToSkillPathsUpdateWithoutSkillPathInputSchema } from './SkillsToSkillPathsUpdateWithoutSkillPathInputSchema';
import { SkillsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema } from './SkillsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema';

export const SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInput> = z.object({
  where: z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillsToSkillPathsUpdateWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema) ]),
}).strict();

export default SkillsToSkillPathsUpdateWithWhereUniqueWithoutSkillPathInputSchema;
