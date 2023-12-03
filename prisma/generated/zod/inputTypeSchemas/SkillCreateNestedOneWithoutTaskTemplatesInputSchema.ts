import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutTaskTemplatesInputSchema } from './SkillCreateWithoutTaskTemplatesInputSchema';
import { SkillUncheckedCreateWithoutTaskTemplatesInputSchema } from './SkillUncheckedCreateWithoutTaskTemplatesInputSchema';
import { SkillCreateOrConnectWithoutTaskTemplatesInputSchema } from './SkillCreateOrConnectWithoutTaskTemplatesInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';

export const SkillCreateNestedOneWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutTaskTemplatesInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutTaskTemplatesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutTaskTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutTaskTemplatesInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export default SkillCreateNestedOneWithoutTaskTemplatesInputSchema;
