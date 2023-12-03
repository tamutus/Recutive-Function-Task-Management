import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateWithoutTagsInputSchema } from './SkillPathCreateWithoutTagsInputSchema';
import { SkillPathUncheckedCreateWithoutTagsInputSchema } from './SkillPathUncheckedCreateWithoutTagsInputSchema';
import { SkillPathCreateOrConnectWithoutTagsInputSchema } from './SkillPathCreateOrConnectWithoutTagsInputSchema';
import { SkillPathUpsertWithoutTagsInputSchema } from './SkillPathUpsertWithoutTagsInputSchema';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';
import { SkillPathUpdateToOneWithWhereWithoutTagsInputSchema } from './SkillPathUpdateToOneWithWhereWithoutTagsInputSchema';
import { SkillPathUpdateWithoutTagsInputSchema } from './SkillPathUpdateWithoutTagsInputSchema';
import { SkillPathUncheckedUpdateWithoutTagsInputSchema } from './SkillPathUncheckedUpdateWithoutTagsInputSchema';

export const SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.SkillPathUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathCreateWithoutTagsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillPathCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => SkillPathUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => SkillPathWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SkillPathUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => SkillPathUpdateWithoutTagsInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default SkillPathUpdateOneRequiredWithoutTagsNestedInputSchema;
