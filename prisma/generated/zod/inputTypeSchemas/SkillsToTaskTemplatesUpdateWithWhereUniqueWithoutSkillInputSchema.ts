import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from './SkillsToTaskTemplatesWhereUniqueInputSchema';
import { SkillsToTaskTemplatesUpdateWithoutSkillInputSchema } from './SkillsToTaskTemplatesUpdateWithoutSkillInputSchema';
import { SkillsToTaskTemplatesUncheckedUpdateWithoutSkillInputSchema } from './SkillsToTaskTemplatesUncheckedUpdateWithoutSkillInputSchema';

export const SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutSkillInput> = z.object({
  where: z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillsToTaskTemplatesUpdateWithoutSkillInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedUpdateWithoutSkillInputSchema) ]),
}).strict();

export default SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutSkillInputSchema;
