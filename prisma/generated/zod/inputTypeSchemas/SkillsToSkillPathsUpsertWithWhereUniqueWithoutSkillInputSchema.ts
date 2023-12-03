import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsWhereUniqueInputSchema } from './SkillsToSkillPathsWhereUniqueInputSchema';
import { SkillsToSkillPathsUpdateWithoutSkillInputSchema } from './SkillsToSkillPathsUpdateWithoutSkillInputSchema';
import { SkillsToSkillPathsUncheckedUpdateWithoutSkillInputSchema } from './SkillsToSkillPathsUncheckedUpdateWithoutSkillInputSchema';
import { SkillsToSkillPathsCreateWithoutSkillInputSchema } from './SkillsToSkillPathsCreateWithoutSkillInputSchema';
import { SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema } from './SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema';

export const SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillsToSkillPathsUpdateWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => SkillsToSkillPathsCreateWithoutSkillInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillInputSchema;
