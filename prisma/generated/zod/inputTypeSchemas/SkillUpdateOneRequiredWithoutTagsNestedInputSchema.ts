import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutTagsInputSchema } from './SkillCreateWithoutTagsInputSchema';
import { SkillUncheckedCreateWithoutTagsInputSchema } from './SkillUncheckedCreateWithoutTagsInputSchema';
import { SkillCreateOrConnectWithoutTagsInputSchema } from './SkillCreateOrConnectWithoutTagsInputSchema';
import { SkillUpsertWithoutTagsInputSchema } from './SkillUpsertWithoutTagsInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillUpdateToOneWithWhereWithoutTagsInputSchema } from './SkillUpdateToOneWithWhereWithoutTagsInputSchema';
import { SkillUpdateWithoutTagsInputSchema } from './SkillUpdateWithoutTagsInputSchema';
import { SkillUncheckedUpdateWithoutTagsInputSchema } from './SkillUncheckedUpdateWithoutTagsInputSchema';

export const SkillUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.SkillUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutTagsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => SkillUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => SkillUpdateWithoutTagsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default SkillUpdateOneRequiredWithoutTagsNestedInputSchema;
