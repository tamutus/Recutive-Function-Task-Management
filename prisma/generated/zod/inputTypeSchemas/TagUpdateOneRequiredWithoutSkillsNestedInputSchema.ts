import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutSkillsInputSchema } from './TagCreateWithoutSkillsInputSchema';
import { TagUncheckedCreateWithoutSkillsInputSchema } from './TagUncheckedCreateWithoutSkillsInputSchema';
import { TagCreateOrConnectWithoutSkillsInputSchema } from './TagCreateOrConnectWithoutSkillsInputSchema';
import { TagUpsertWithoutSkillsInputSchema } from './TagUpsertWithoutSkillsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutSkillsInputSchema } from './TagUpdateToOneWithWhereWithoutSkillsInputSchema';
import { TagUpdateWithoutSkillsInputSchema } from './TagUpdateWithoutSkillsInputSchema';
import { TagUncheckedUpdateWithoutSkillsInputSchema } from './TagUncheckedUpdateWithoutSkillsInputSchema';

export const TagUpdateOneRequiredWithoutSkillsNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutSkillsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutSkillsInputSchema),z.lazy(() => TagUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutSkillsInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutSkillsInputSchema),z.lazy(() => TagUpdateWithoutSkillsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutSkillsInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutSkillsNestedInputSchema;
