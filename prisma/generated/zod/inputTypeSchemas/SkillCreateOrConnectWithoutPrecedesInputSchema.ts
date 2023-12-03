import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';
import { SkillCreateWithoutPrecedesInputSchema } from './SkillCreateWithoutPrecedesInputSchema';
import { SkillUncheckedCreateWithoutPrecedesInputSchema } from './SkillUncheckedCreateWithoutPrecedesInputSchema';

export const SkillCreateOrConnectWithoutPrecedesInputSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutPrecedesInput> = z.object({
  where: z.lazy(() => SkillWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SkillCreateWithoutPrecedesInputSchema),z.lazy(() => SkillUncheckedCreateWithoutPrecedesInputSchema) ]),
}).strict();

export default SkillCreateOrConnectWithoutPrecedesInputSchema;
