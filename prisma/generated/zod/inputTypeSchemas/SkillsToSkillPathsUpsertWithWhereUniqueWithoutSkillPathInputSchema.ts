import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsWhereUniqueInputSchema } from './SkillsToSkillPathsWhereUniqueInputSchema';
import { SkillsToSkillPathsUpdateWithoutSkillPathInputSchema } from './SkillsToSkillPathsUpdateWithoutSkillPathInputSchema';
import { SkillsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema } from './SkillsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema';
import { SkillsToSkillPathsCreateWithoutSkillPathInputSchema } from './SkillsToSkillPathsCreateWithoutSkillPathInputSchema';
import { SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema } from './SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema';

export const SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema: z.ZodType<Prisma.SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInput> = z.object({
  where: z.lazy(() => SkillsToSkillPathsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillsToSkillPathsUpdateWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedUpdateWithoutSkillPathInputSchema) ]),
  create: z.union([ z.lazy(() => SkillsToSkillPathsCreateWithoutSkillPathInputSchema),z.lazy(() => SkillsToSkillPathsUncheckedCreateWithoutSkillPathInputSchema) ]),
}).strict();

export default SkillsToSkillPathsUpsertWithWhereUniqueWithoutSkillPathInputSchema;
