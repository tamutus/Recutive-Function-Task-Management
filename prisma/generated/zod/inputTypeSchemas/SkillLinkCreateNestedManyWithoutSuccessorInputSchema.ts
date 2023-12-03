import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillLinkCreateWithoutSuccessorInputSchema } from './SkillLinkCreateWithoutSuccessorInputSchema';
import { SkillLinkUncheckedCreateWithoutSuccessorInputSchema } from './SkillLinkUncheckedCreateWithoutSuccessorInputSchema';
import { SkillLinkCreateOrConnectWithoutSuccessorInputSchema } from './SkillLinkCreateOrConnectWithoutSuccessorInputSchema';
import { SkillLinkCreateManySuccessorInputEnvelopeSchema } from './SkillLinkCreateManySuccessorInputEnvelopeSchema';
import { SkillLinkWhereUniqueInputSchema } from './SkillLinkWhereUniqueInputSchema';

export const SkillLinkCreateNestedManyWithoutSuccessorInputSchema: z.ZodType<Prisma.SkillLinkCreateNestedManyWithoutSuccessorInput> = z.object({
  create: z.union([ z.lazy(() => SkillLinkCreateWithoutSuccessorInputSchema),z.lazy(() => SkillLinkCreateWithoutSuccessorInputSchema).array(),z.lazy(() => SkillLinkUncheckedCreateWithoutSuccessorInputSchema),z.lazy(() => SkillLinkUncheckedCreateWithoutSuccessorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SkillLinkCreateOrConnectWithoutSuccessorInputSchema),z.lazy(() => SkillLinkCreateOrConnectWithoutSuccessorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SkillLinkCreateManySuccessorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SkillLinkWhereUniqueInputSchema),z.lazy(() => SkillLinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SkillLinkCreateNestedManyWithoutSuccessorInputSchema;
