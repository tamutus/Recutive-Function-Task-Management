import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutPrecedesInputSchema } from './SkillCreateWithoutPrecedesInputSchema';
import { SkillUncheckedCreateWithoutPrecedesInputSchema } from './SkillUncheckedCreateWithoutPrecedesInputSchema';
import { SkillCreateOrConnectWithoutPrecedesInputSchema } from './SkillCreateOrConnectWithoutPrecedesInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';

export const SkillCreateNestedOneWithoutPrecedesInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutPrecedesInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutPrecedesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrecedesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutPrecedesInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export default SkillCreateNestedOneWithoutPrecedesInputSchema;
