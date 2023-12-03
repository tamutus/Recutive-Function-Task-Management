import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesWhereUniqueInputSchema } from './SkillsToTaskTemplatesWhereUniqueInputSchema';
import { SkillsToTaskTemplatesUpdateWithoutTaskInputSchema } from './SkillsToTaskTemplatesUpdateWithoutTaskInputSchema';
import { SkillsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './SkillsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';
import { SkillsToTaskTemplatesCreateWithoutTaskInputSchema } from './SkillsToTaskTemplatesCreateWithoutTaskInputSchema';
import { SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema } from './SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema';

export const SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => SkillsToTaskTemplatesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SkillsToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
  create: z.union([ z.lazy(() => SkillsToTaskTemplatesCreateWithoutTaskInputSchema),z.lazy(() => SkillsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema) ]),
}).strict();

export default SkillsToTaskTemplatesUpsertWithWhereUniqueWithoutTaskInputSchema;
