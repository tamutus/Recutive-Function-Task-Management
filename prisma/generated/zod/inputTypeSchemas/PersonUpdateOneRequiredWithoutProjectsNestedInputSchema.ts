import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutProjectsInputSchema } from './PersonCreateWithoutProjectsInputSchema';
import { PersonUncheckedCreateWithoutProjectsInputSchema } from './PersonUncheckedCreateWithoutProjectsInputSchema';
import { PersonCreateOrConnectWithoutProjectsInputSchema } from './PersonCreateOrConnectWithoutProjectsInputSchema';
import { PersonUpsertWithoutProjectsInputSchema } from './PersonUpsertWithoutProjectsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutProjectsInputSchema } from './PersonUpdateToOneWithWhereWithoutProjectsInputSchema';
import { PersonUpdateWithoutProjectsInputSchema } from './PersonUpdateWithoutProjectsInputSchema';
import { PersonUncheckedUpdateWithoutProjectsInputSchema } from './PersonUncheckedUpdateWithoutProjectsInputSchema';

export const PersonUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutProjectsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutProjectsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutProjectsInputSchema),z.lazy(() => PersonUpdateWithoutProjectsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutProjectsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutProjectsNestedInputSchema;
