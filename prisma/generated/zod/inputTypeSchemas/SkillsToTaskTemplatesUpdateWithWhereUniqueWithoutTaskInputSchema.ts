import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from './SkillsToTaskTemplatesWhereUniqueInputSchema';
import { SkillsToTaskTemplatesUpdateWithoutTaskInputSchema } from './SkillsToTaskTemplatesUpdateWithoutTaskInputSchema';
import { SkillsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './SkillsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';

export const SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SkillsToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default SkillsToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema;
