import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutTagsInputSchema } from './SkillCreateWithoutTagsInputSchema';
import { SkillUncheckedCreateWithoutTagsInputSchema } from './SkillUncheckedCreateWithoutTagsInputSchema';
import { SkillCreateOrConnectWithoutTagsInputSchema } from './SkillCreateOrConnectWithoutTagsInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';

export const SkillCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutTagsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export default SkillCreateNestedOneWithoutTagsInputSchema;
