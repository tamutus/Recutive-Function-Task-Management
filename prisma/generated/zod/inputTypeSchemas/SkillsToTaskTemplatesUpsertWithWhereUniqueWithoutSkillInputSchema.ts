import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from './SkillsToTaskTemplatesWhereUniqueInputSchema';
import { SkillsToTaskTemplatesUpdateWithoutSkillInputSchema } from './SkillsToTaskTemplatesUpdateWithoutSkillInputSchema';
import { SkillsToTaskTemplatesUncheckedUpdateWithoutSkillInputSchema } from './SkillsToTaskTemplatesUncheckedUpdateWithoutSkillInputSchema';
import { SkillsToTaskTemplatesCreateWithoutSkillInputSchema } from './SkillsToTaskTemplatesCreateWithoutSkillInputSchema';
import { SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema } from './SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema';

export const SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillsToTaskTemplatesUpdateWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedUpdateWithoutSkillInputSchema) ]),
  create: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutSkillInputSchema;
