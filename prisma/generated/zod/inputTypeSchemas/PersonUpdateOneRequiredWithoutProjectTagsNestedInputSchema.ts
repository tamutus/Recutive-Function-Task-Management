import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutProjectTagsInputSchema } from './PersonCreateWithoutProjectTagsInputSchema';
import { PersonUncheckedCreateWithoutProjectTagsInputSchema } from './PersonUncheckedCreateWithoutProjectTagsInputSchema';
import { PersonCreateOrConnectWithoutProjectTagsInputSchema } from './PersonCreateOrConnectWithoutProjectTagsInputSchema';
import { PersonUpsertWithoutProjectTagsInputSchema } from './PersonUpsertWithoutProjectTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutProjectTagsInputSchema } from './PersonUpdateToOneWithWhereWithoutProjectTagsInputSchema';
import { PersonUpdateWithoutProjectTagsInputSchema } from './PersonUpdateWithoutProjectTagsInputSchema';
import { PersonUncheckedUpdateWithoutProjectTagsInputSchema } from './PersonUncheckedUpdateWithoutProjectTagsInputSchema';

export const PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutProjectTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutProjectTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutProjectTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutProjectTagsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutProjectTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutProjectTagsInputSchema),z.lazy(() => PersonUpdateWithoutProjectTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutProjectTagsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutProjectTagsNestedInputSchema;
