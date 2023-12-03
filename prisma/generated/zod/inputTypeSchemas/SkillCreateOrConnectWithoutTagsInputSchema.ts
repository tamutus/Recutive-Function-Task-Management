import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillCreateWithoutTagsInputSchema } from './SkillCreateWithoutTagsInputSchema';
import { SkillUncheckedCreateWithoutTagsInputSchema } from './SkillUncheckedCreateWithoutTagsInputSchema';

export const SkillCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutTagsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default SkillCreateOrConnectWithoutTagsInputSchema;
